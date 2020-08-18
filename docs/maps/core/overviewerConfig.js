var overviewerConfig = {
    "worlds": [
        "Core01"
    ],
    "map": {
        "cacheTag": "1597777285",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "spawn": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "pan": true,
            "zoom": true
        }
    },
    "tilesets": [
        {
            "imgextension": "png",
            "maxZoom": 10,
            "showlocationmarker": true,
            "name": "Daytime Render",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "poititle": "Markers",
            "bgcolor": "#1a1a1a",
            "base": "",
            "isOverlay": false,
            "path": "day",
            "defaultZoom": 1,
            "world": "Core01",
            "minZoom": 0,
            "north_direction": 0,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1597777080
        }
    ],
    "CONST": {
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "image": {
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "signMarker": "signpost_icon.png"
        },
        "mapDivId": "mcmap",
        "tileSize": 384,
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    }
};
