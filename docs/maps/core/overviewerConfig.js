var overviewerConfig = {
    "CONST": {
        "image": {
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3
    },
    "tilesets": [
        {
            "poititle": "Markers",
            "zoomLevels": 10,
            "maxZoom": 10,
            "name": "Daytime Render",
            "last_rendertime": 1597341480,
            "north_direction": 0,
            "showlocationmarker": true,
            "base": "",
            "bgcolor": "#1a1a1a",
            "spawn": [
                80,
                96,
                192
            ],
            "world": "Core01",
            "path": "day",
            "isOverlay": false,
            "imgextension": "png",
            "minZoom": 0,
            "defaultZoom": 1,
            "center": [
                80,
                96,
                192
            ]
        }
    ],
    "worlds": [
        "Core01"
    ],
    "map": {
        "controls": {
            "spawn": true,
            "pan": true,
            "overlays": true,
            "mapType": true,
            "coordsBox": true,
            "zoom": true,
            "compass": true
        },
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1597341687"
    }
};
