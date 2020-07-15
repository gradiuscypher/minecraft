var overviewerConfig = {
    "CONST": {
        "UPPERRIGHT": 1,
        "LOWERRIGHT": 2,
        "UPPERLEFT": 0,
        "LOWERLEFT": 3,
        "mapDivId": "mcmap",
        "image": {
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "spawnMarker": "markers/marker_home.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "signMarker": "signpost_icon.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png"
        },
        "tileSize": 384
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "base": "",
            "imgextension": "png",
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                3,
                80,
                12
            ],
            "spawn": [
                3,
                80,
                12
            ],
            "last_rendertime": 1594781779,
            "world": "world",
            "minZoom": 0,
            "zoomLevels": 8,
            "isOverlay": false,
            "north_direction": 0,
            "bgcolor": "#1a1a1a",
            "maxZoom": 8,
            "defaultZoom": 1,
            "path": "day"
        }
    ],
    "map": {
        "cacheTag": "1594782239",
        "debug": true,
        "north_direction": "lower-left",
        "controls": {
            "coordsBox": true,
            "mapType": true,
            "pan": true,
            "zoom": true,
            "compass": true,
            "spawn": true,
            "overlays": true
        }
    },
    "worlds": [
        "world"
    ]
};
