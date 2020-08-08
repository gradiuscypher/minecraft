var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "LOWERLEFT": 3,
        "image": {
            "queryMarker": "markers/marker_location.png",
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png"
        },
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "mapDivId": "mcmap"
    },
    "worlds": [
        "Core01"
    ],
    "tilesets": [
        {
            "isOverlay": false,
            "last_rendertime": 1596880680,
            "spawn": [
                80,
                96,
                192
            ],
            "base": "",
            "name": "Daytime Render",
            "imgextension": "png",
            "center": [
                80,
                96,
                192
            ],
            "showlocationmarker": true,
            "minZoom": 0,
            "poititle": "Markers",
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "maxZoom": 10,
            "path": "day",
            "defaultZoom": 1,
            "world": "Core01",
            "zoomLevels": 10
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1596880881",
        "controls": {
            "coordsBox": true,
            "overlays": true,
            "spawn": true,
            "zoom": true,
            "mapType": true,
            "pan": true,
            "compass": true
        }
    }
};
