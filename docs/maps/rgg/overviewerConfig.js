var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "UPPERLEFT": 0,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2,
        "image": {
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            }
        }
    },
    "worlds": [
        "world"
    ],
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "spawn": true,
            "zoom": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "mapType": true,
            "overlays": true
        },
        "cacheTag": "1598180568",
        "debug": true
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "north_direction": 0,
            "path": "day",
            "maxZoom": 8,
            "poititle": "Markers",
            "showlocationmarker": true,
            "isOverlay": false,
            "imgextension": "png",
            "zoomLevels": 8,
            "spawn": [
                3,
                80,
                12
            ],
            "defaultZoom": 1,
            "minZoom": 0,
            "last_rendertime": 1598180179,
            "bgcolor": "#1a1a1a",
            "base": "",
            "center": [
                3,
                80,
                12
            ],
            "world": "world"
        }
    ]
};
