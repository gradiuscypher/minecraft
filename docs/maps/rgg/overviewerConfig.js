var overviewerConfig = {
    "CONST": {
        "UPPERLEFT": 0,
        "mapDivId": "mcmap",
        "image": {
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "2": "compass_lower-right.png",
                "3": "compass_lower-left.png"
            },
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "spawnMarker": "markers/marker_home.png",
            "defaultMarker": "signpost.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png"
        },
        "LOWERLEFT": 3,
        "tileSize": 384,
        "LOWERRIGHT": 2,
        "UPPERRIGHT": 1
    },
    "worlds": [
        "world"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1599325369",
        "north_direction": "lower-left",
        "controls": {
            "compass": true,
            "overlays": true,
            "spawn": true,
            "pan": true,
            "mapType": true,
            "zoom": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "spawn": [
                3,
                80,
                12
            ],
            "path": "day",
            "last_rendertime": 1599324979,
            "bgcolor": "#1a1a1a",
            "world": "world",
            "zoomLevels": 8,
            "north_direction": 0,
            "minZoom": 0,
            "imgextension": "png",
            "poititle": "Markers",
            "isOverlay": false,
            "base": "",
            "maxZoom": 8,
            "name": "Daytime Render",
            "defaultZoom": 1,
            "center": [
                3,
                80,
                12
            ],
            "showlocationmarker": true
        }
    ]
};
