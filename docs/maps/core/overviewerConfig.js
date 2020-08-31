var overviewerConfig = {
    "CONST": {
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        },
        "LOWERLEFT": 3,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "Core01"
    ],
    "map": {
        "north_direction": "lower-left",
        "debug": true,
        "cacheTag": "1598871685",
        "controls": {
            "zoom": true,
            "overlays": true,
            "mapType": true,
            "spawn": true,
            "pan": true,
            "coordsBox": true,
            "compass": true
        }
    },
    "tilesets": [
        {
            "world": "Core01",
            "spawn": [
                80,
                96,
                192
            ],
            "zoomLevels": 10,
            "center": [
                80,
                96,
                192
            ],
            "last_rendertime": 1598871480,
            "maxZoom": 10,
            "showlocationmarker": true,
            "path": "day",
            "isOverlay": false,
            "name": "Daytime Render",
            "base": "",
            "north_direction": 0,
            "imgextension": "png",
            "minZoom": 0,
            "bgcolor": "#1a1a1a",
            "poititle": "Markers",
            "defaultZoom": 1
        }
    ]
};
