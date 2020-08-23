var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "tileSize": 384,
        "mapDivId": "mcmap",
        "image": {
            "bedMarker": "bed.png",
            "signMarker": "signpost_icon.png",
            "spawnMarker": "markers/marker_home.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "defaultMarker": "signpost.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        }
    },
    "tilesets": [
        {
            "world": "world",
            "north_direction": 0,
            "imgextension": "png",
            "center": [
                3,
                80,
                12
            ],
            "isOverlay": false,
            "maxZoom": 8,
            "base": "",
            "path": "day",
            "bgcolor": "#1a1a1a",
            "spawn": [
                3,
                80,
                12
            ],
            "poititle": "Markers",
            "last_rendertime": 1598165779,
            "zoomLevels": 8,
            "showlocationmarker": true,
            "minZoom": 0,
            "name": "Daytime Render",
            "defaultZoom": 1
        }
    ],
    "map": {
        "debug": true,
        "north_direction": "lower-left",
        "cacheTag": "1598166167",
        "controls": {
            "spawn": true,
            "mapType": true,
            "compass": true,
            "pan": true,
            "coordsBox": true,
            "zoom": true,
            "overlays": true
        }
    },
    "worlds": [
        "world"
    ]
};
