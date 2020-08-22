var overviewerConfig = {
    "CONST": {
        "LOWERLEFT": 3,
        "tileSize": 384,
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "image": {
            "signMarker": "signpost_icon.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "queryMarker": "markers/marker_location.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "bedMarker": "bed.png"
        }
    },
    "map": {
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "overlays": true,
            "compass": true,
            "spawn": true,
            "coordsBox": true,
            "mapType": true
        },
        "debug": true,
        "cacheTag": "1598119365"
    },
    "worlds": [
        "world"
    ],
    "tilesets": [
        {
            "north_direction": 0,
            "imgextension": "png",
            "bgcolor": "#1a1a1a",
            "center": [
                3,
                80,
                12
            ],
            "minZoom": 0,
            "poititle": "Markers",
            "name": "Daytime Render",
            "world": "world",
            "path": "day",
            "isOverlay": false,
            "last_rendertime": 1598118979,
            "maxZoom": 8,
            "defaultZoom": 1,
            "spawn": [
                3,
                80,
                12
            ],
            "base": "",
            "zoomLevels": 8,
            "showlocationmarker": true
        }
    ]
};
