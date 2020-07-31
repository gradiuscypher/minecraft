var overviewerConfig = {
    "CONST": {
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "defaultMarker": "signpost.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        }
    },
    "tilesets": [
        {
            "showlocationmarker": true,
            "poititle": "Markers",
            "isOverlay": false,
            "center": [
                80,
                96,
                192
            ],
            "maxZoom": 10,
            "zoomLevels": 10,
            "minZoom": 0,
            "path": "day",
            "defaultZoom": 1,
            "name": "Daytime Render",
            "north_direction": 0,
            "last_rendertime": 1596207480,
            "bgcolor": "#1a1a1a",
            "imgextension": "png",
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "world": "Core01"
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "overlays": true,
            "zoom": true,
            "compass": true,
            "mapType": true,
            "pan": true,
            "spawn": true,
            "coordsBox": true
        },
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596207681"
    }
};
